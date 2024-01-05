---
title: Commands You don't Know
description: Windows commands that you've never heard of before
---

(copying everything from the old site)

This page contains things related to windows which you may not know about. Keep
scrolling to find out. (or just use [linux](/linux/commands))

## Filesystem

Commands for uncommon filesystem tasks

### Create a new drive for a folder

This may sound like magic, but you can actually create a specific drive just
for a folder—Which means that you can create a drive like `C:\` or `D:\` just
for a folder.

Here's the command which will create a drive `q:\` for the folder specified.

```bash title="Powershell"
subst q: C:\location\to\folder
```
    
:::danger
Make sure to not put in the location of an existing drive's mount point since
that will cause problems
:::


Now if you check your file explorer, you'll find a new drive `Q:\` which will
have the contents of the folder.

This is really useful when you have a confusing or complicated arrangement of
all your documents, etc. and you would like to get right to where you want to
go with ease (or just use linux).

To undo this run this command replacing `q:` with the name of the drive you
have given (in this example, its just `q`).

```bash title="Powershell"
subst /d q:
```

### Hide a folder without using dots

```bash title="Powershell"
attrib +h +s +r foldername
```

Replacing `foldername` with the name of your folder

To unhide it (use `-` It's just the opposite of `+`)

```bash title="Powershell"
attrib -h -s -r foldername
```

### Hide a zip or rar file inside an image

```bash title="Powershell"
copy /b image.extension+folder.zip image.extension
```
