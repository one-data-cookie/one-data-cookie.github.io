from datetime import datetime
from os import path
from pocket import Pocket


# https://github.com/karlicoss/pockexport/issues/1
# https://github.com/jamietr1/obsidian-automation/blob/main/obsidian-make-daily.py#L9-L19
def get_config_value(key):
    try:
        with open(home_root + config_file, 'r') as f:
            for line in f:
                if key + "=" in line:
                    (_, value) = line.split("=", 1)
                    return value.replace('"', "").strip()
    except:
        print("An error occurred reading the config file. Does it exist?")
        quit()

    return None


def get_items(consumer_key, access_token):
    p = Pocket(consumer_key, access_token)
    export_full = p.get(favorite=1, state="archive", sort="oldest",
                   detailType="complete", annotations=1)

    export = export_full[0]['list']

    print(f"{len(export)} item(s) extracted from Pocket.")
    return export


def export_items(items, consumer_key, access_token):
    i = 0
    all_info = []
    for key in items:
        item = items[key]
        if item['resolved_title'] != '':
            filename = item['resolved_title']
        elif item['given_title'] != '':
            filename = item['given_title']
        else:
            filename = f"Untitled[{i}"
            i += 1

        filename = filename.strip().replace('/', '--or--')

        info = {
            "item_id": key,
            "title": filename,
            "title-cs":
                item['resolved_title'] if item['lang'] == "cs"
                else "",
            "lang": item['lang'],
            "category":
                ' '.join(item['tags'].keys()) if item.get('tags')
                else "",
            "created": datetime.fromtimestamp(int(item['time_read'])).strftime('%d %b %Y'),
            "updated": datetime.now().strftime('%d %b %Y'),
            "sources": item['resolved_url'],
            "excerpt": item['excerpt'],
            "annotations":
                [a['quote'] for a in item['annotations']] if item.get('annotations')
                else None
        }

        file_path = pocket_path + "/" + filename + ".md"

        if path.exists(file_path):
            print(f"File {file_path} already exists, hence not overwriting.")
        else:
            print(f"Putting an item into file {file_path}.")
            with open(file_path, 'w') as f:
                f.write("---\n")
                f.write(f"title: {info['title']}\n")
                f.write(f"title-cs: {info['title-cs']}\n")
                f.write(f"category: {info['category']}\n")
                f.write("tags: [idea]\n")
                f.write("season: autumn\n")
                f.write(f"created: {info['created']}\n")
                f.write(f"updated: {info['updated']}\n")
                f.write(f"sources: {info['sources']}\n")
                f.write("---\n")
                if info['annotations']:
                    f.write("\n## Highlights\n")
                    for a in info['annotations']:
                        f.write(f"{a}\n\n")

        p = Pocket(consumer_key, access_token)
        p.unfavorite(info['item_id']).commit()

    print("All items imported.")
    return None

# Put it all together
if __name__ == "__main__":
    home_root = path.dirname(path.dirname(path.abspath(__file__))) # https://stackoverflow.com/a/3430395
    config_file = "/utilities/config"
    pocket_root = "/_notes/_0-inbox/pocket"

    pocket_path = home_root + pocket_root

    consumer_key = get_config_value("consumer_key")
    access_token = get_config_value("access_token")

    items = get_items(consumer_key, access_token)
    export_items(items, consumer_key, access_token)

    print("Importing of Pocket is done.")
