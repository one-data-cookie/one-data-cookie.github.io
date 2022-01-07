from datetime import datetime, timedelta, timezone
from gcsa.google_calendar import GoogleCalendar
from os import path
from random import choice
from requests import get


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


# https://github.com/chubin/wttr.in
def get_weather(location):
    formatting = "sky: %m %c %p\ntemp: %t, feels %f\nlight: [%S,%s]\n"
    params = {"format": formatting}

    r = get("http://v2.wttr.in/" + location, params)
    weat = r.text.strip()

    print("Weather info extracted.")
    return weat


# https://github.com/kuzmoyev/google-calendar-simple-api
def get_events(calendars, creds, today):
    td = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    tm = td + timedelta(2) # with one-day buffer due to timezone

    ev_list = []
    for cal in calendars:
        cal_id = calendars[cal]
        gc = GoogleCalendar(credentials_path=creds, calendar=cal_id)
        for event in gc.get_events(td, tm, single_events=True):
            # using this: https://google-calendar-simple-api.readthedocs.io/en/latest/code/event.html
            if today in str(event):
                title = event.summary

                start = str(event.start).replace(today, '').strip()
                if start == "":
                    time = "00:00"
                else:
                    time = ':'.join(start.split(':')[0:2])

                if event.location:
                    loc = event.location
                    ev_str = f"{time}: {title} @ {loc} ({cal})"
                else:
                    ev_str = f"{time}: {title} ({cal})"

                ev_list.append(ev_str)

    ev_list.sort()

    print(f"{len(ev_list)} calendar event(s) extracted.")
    return ev_list


## https://www.marcandangel.com/2011/03/14/365-thought-provoking-questions-to-ask-yourself-this-year/
def get_question(file_365):
    with open(home_root + file_365, 'r') as f:
        l = f.readlines()

    q = choice(l).replace('\n', '')

    print("Question selected.")
    return q


# Put it all together
if __name__ == "__main__":
    home_root = path.dirname(path.dirname(path.abspath(__file__))) # https://stackoverflow.com/a/3430395
    config_file = "/utilities/config"
    notes_root = "/_notes"
    daily_root = "/_1-journal/daily"

    today = datetime.today().strftime("%Y-%m-%d")
    daily_path = home_root + notes_root + daily_root + "/" + today + ".md"

    location = get_config_value("location")
    weather = get_weather(location)

    calendar_names = ["mk", "birthdays", "education", "mmm", "namedays",
                      "social", "sport", "work", "holidays", "slido",
                      "slido_personal"]
    calendars = {}
    for c in calendar_names:
        calendars[c] = get_config_value(c)
    creds = home_root + "/utilities/google-credentials.json"
    events = get_events(calendars, creds, today)

    file_365 = "/utilities/365.txt"
    question = get_question(file_365)

    if path.exists(daily_path):
        print("File already exists, hence not overwriting.")
    else:
        print("Generating daily file.")
        with open(daily_path, 'w') as f:
            f.write("---\n")
            f.write(f"{weather}\n")
            f.write("---\n")
            f.write("\n## Agenda\n")
            for e in events:
                f.write(f"{e}\n")
            f.write("\n## Journal Entry\n")
            f.write("\n## Question a Day\n")
            f.write(f"**{question}**\n")

    print("Creating of note is done.")
