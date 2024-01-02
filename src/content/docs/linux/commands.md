---
title: Commands
description: Cool Linux Commands
---

(Copying everything from the old site)

Here's some commands, scripts, shortucts etc. that I find useful and improve
my workflow.

## Git 

Git is probably one of the most important tools for a programmer. Helps keep
track of what changes you have done to your codebase, allows rolling back to
previous changes if you mess something up and more more. Below are some
features that I find really useful in git.

### Git Repository Mirroring

Repositories can be mirrored from one site/origin to another using just 3
commands. You will need read access for the Repository and write access to the
new Repository. Here are the commands which can be put into a `.sh (shell
script)` file which can be used for automation.


```bash title="Terminal"
# Replace the URL with your Repository
git clone --mirror https://github.com/fluffysnowman/snowdocs.dev.git

# Replace with your Repository
cd snowdocs.dev.git

# Replace with the new mirror Repository's URL
git remote set-url --push origin http://192.168.1.124:8888/fluffysnowman/snowdocs.dev.git

# Finally push the Repository
git push --mirror
```


Let's take a look at what we did here

1. We cloned the GitHub repository to a folder in our current working directory

2. We changed the directory to the new repository and changed the remote's URL
   to the one where the mirrored one will live

3. We pushed the repository to the new one with the `--mirror option`

If all went well then this should've worked

### Automated Git Repository Mirroring

Now to automatically mirror the repository every 1 or 2 or x
hours/minutes/days we can use the <code>crontab</code> on linux.

To do this we need to edit the crontab, add the interval for every run of the
job (every 1 hr or 1 day), and add the path of what program to run. In this
case we'll use a shell script to do everything (updating the repository locally
and on the new origin)

Create a shell script file (`.sh`) anywhere on your system and take a note of
the path that its at since we'll be using this later.

Copy the code below into the file and save it.

:::note
Replace the capital letters with values that are specific to your system.
:::

<br />

```bash frame="code"
#!/bin/bash
# mirror_repository.sh

cd PATH-TO-REPOSITORY # i.e. cd /home/fluffy/mirrors/my-repository.git

git remote set-url --push origin http://192.168.1.124:8888/fluffysnowman/snowdocs.dev.git
git fetch -p origin
git push --mirror
```

_Or if you want to mirror your repository to multiple location_

```bash frame="code" title="mirror_repositories.sh"

cd PATH-TO-REPOSITORY # i.e. cd /home/fluffy/mirrors/my-repository.git
git fetch -p origin

# first location
git remote set-url --push origin http://192.168.1.124:8888/fluffysnowman/snowdocs.dev.git
git push --mirror

# second location
git remote set-url --push origin http://192.168.1.100:8888/fluffysnowman/snowdocs.dev.git
git push --mirror

# you can add as many as you want
```

Now we need to make this script executable and add it to the crontab.

To do this we can do a `crontab -e` to edit the crontab. Use `crontab -l` to
list everything in the crontab.

```bash title="terminal"

chmod +x mirror_repositories.sh # make the script executable

crontab -e # to edit the crontab
```

and now add this line with the path to the script to mirror the files.

```txt title="crontab" frame="code"
0 * * * * /home/fluffy/mirror_repositories.sh
```

This will run the script every hour of every day forever. Now save the file
(with vim it would be `:wq`) and it should work.

## Navigation

Check out [keybinds](/linux/keybinds#easy-navigation) for a cool and fast way
to `cd` around the filesystem.



