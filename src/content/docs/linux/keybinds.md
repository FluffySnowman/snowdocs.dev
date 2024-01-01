---
title: Useful Keybinds
description: Lists of useful Keybinds
---

(copy pasting everything from the old site)

## The Terminal

I live in a termnal and use vim hence I need to flex and tell everyone about
it.

Regardless, here are some useful keybinds which will help you out if you're a
keyboard ninja and don't use the arrow keys (or even enter and backspace).

### CLI Shortcuts/Keybinds

Here's a list of shortcuts that you can use in the terminal to speed up your
work

| Shortcut keybind | Explanation                                                   |
| ---------------- | ------------------------------------------------------------- |
| `Ctrl + a`       | Moves to the START of the line                                |
| `Ctrl + e`       | Moves to the END of the line (can be used for autocomplete)   |
| `Alt + b`        | Moves the cursor 1 word backwards (like ctrl with arrow keys) |
| `Alt + f`        | Moves the cursor 1 word forwards (like ctrl arrow keys))      |
| `Ctrl + p`       | Last command (like the up arrow )                             |
| `Ctrl + n`       | Next command (like down arrow)                                |
| `Ctrl + w`       | Delete the word (like ctrl/alt + backspace)                   |
| `Alt + d`        | Delete word (ahead)                                           |
| `Ctrl + r`       | Reverse search (searching through command history)            |
| `Ctrl + k`       | Delete everything till end of the line                        |
| `Ctrl + u`       | Delete everything to the start of the line                    |
| `Ctrl + x e`     | Opens command in your default text editor (vi/nano etc)       |


`Ctrl + x e` opens up your default editor (`vi/nano`) through which you can
edit the command you are typing. This is really useful when you have a long
command, and you don't want to keep navigating around the terminal with the
arrow keys etc.

:::tip[Did you know?]

That you can use a terminal without pressing enter ? `Ctrl + j` (usually) does
the same thing as pressing enter.

> **Why is this useful ?** Sometimes when your terminal gliches when taking
> input and enter doesn't work then `Ctrl + j` can be used.
>
> Example: Terraform's yes/no prompt when creating or destroying resources
> doesn't work properly sometimes so `Ctrl + j` helps out (I get the
> weirdest errors 🗿)
:::


### Easy Navigation

Navigating through the filesystem on Linux or any operating system is annoying
and tiring- but not anymore. The `zsh` alias below will allow you to fuzzyfind
through everything in the current directory, **AND it will `cd` into the
directory of item you have selected** !!

AND it will **ignore** the `node_modules` folder and all dotfiles `.*`.

```bash
alias dc='noglob cd "$(dirname "$(find "$PWD" -type d \( -name ".*" \) -prune -o -type f -print | grep -v "node_modules" | fzf)")"'
```

Add this to your `~/.zshrc` and watch the magic happen. I recommend that you
change the alias `dc` to something else that you'll remember. I named it `dc`
since its the opposite of `cd`.

Watch the video below to see it in action. (media not working)

<!-- <video src="../videos/dc_alias_zshrc.mp4" mini-player="false" preview-src="25Oct2023_0119hrs.png" /> -->

### Vim Navigation Aliases

so on. A simple fix for this is using `fzf` in the neovim/vim command to open a file

```bash title="terminal"
nvim $(fzf)
```

It's that simple!

You can add aliases for this to save some keystrokes. Below is an alias I use
since I don't want it to clash with `nvim` or `vim`

```bash title="zshrc" frame="code"
alias ovim='/snap/bin/nvim $(fzf)'

# replace the location of snap/bin/nvim with the location of your neovim binary or just use the command itself

alias ovim='nvim $(fzf)'
```

Now you can open up a file in vim without going through the pain of navigating
the filesystem with cd.

