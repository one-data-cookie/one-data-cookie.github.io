from pathlib import Path
import os.path
import pendulum
import yaml
import fileinput
import sys

def update_modified_date(file):
    
    # Get current modified date
    f = Path(file)
    ts = os.path.getmtime(f)
    dt = pendulum.from_timestamp(ts)
    mod_date = dt.format('DD MMM YYYY')
    
    # Read file
    with open(file, 'r') as f:

        for s in f:
            if s.startswith('---'):
                break;

        yml_list = []
        for s in f:
            if s.startswith('---'):
                break;
            else:
                yml_list.append(s)

        yml_text = ''.join(yml_list)
        yml_yaml = yaml.load(lines_yml, yaml.SafeLoader)

        md_list = list(f)
        md_text = ''.join(md_list)
        
    # Change line
    season = yml_yaml['season']
    orig_dates = yml_yaml['dates']
    
    if season != 'autumn' and orig_dates[1] != mod_date:
        orig_dates[1] = mod_date
        new_dates = str(orig_dates). replace("'", "")
        new_line = f'dates: {new_dates}\n'
    
    # Replace line
    yml_list[5] = new_line

    # Write everything back
    with open(file, 'w') as f:
        f.writelines('---\n')
        f.writelines(yml_list)
        f.writelines('---\n')
        f.writelines(md_list)
        
f = 'test.md'
update_modified_date(f)