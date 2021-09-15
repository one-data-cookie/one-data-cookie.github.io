---
title: Learn CLI
title-cs: 
category: coding
tags: [learn, cli]
season: spring
dates: [19 Aug 2021, 19 Aug 2021]
sources: Misc
---

- [Learn from Marek Šuppa](https://mareksuppa.com/teaching/linux-cli/2020/)

- Customising prompt:
```
export VIRTUAL_ENV_DISABLE_PROMPT=1
source ~/.git-prompt.sh
function virtualenv_info { [ $VIRTUAL_ENV ] && echo '('`basename $VIRTUAL_ENV`') ' }
setopt PROMPT_SUBST ; PS1='%F{green}@%*%f %F{cyan}[%n]%f %F{yellow}$(virtualenv_info)%f%F{magenta}%~%f%F{red}$(__git_ps1 " (%s)")%f %% '
```

- Making a Python file executable:
```
chmod u+x samlapi.py
```

- Checking your `path`:
```
sudo nano /etc/paths
```