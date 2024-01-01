---
title: Useful Keybinds
description: Lists of useful Keybinds
---


## CLI Shortcuts/Keybinds

Here's a list of shortcuts that you can use in the terminal to speed up your work.

| Shortcut keybind | Explanation                                                   |
|------------------|---------------------------------------------------------------|
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


<tip>
   <p>
      <code lang="bash">Ctrl + x e</code> opens up your default editor (<code>vi/nano</code>) through which you can edit
      the command you are typing.
      This is really useful when you have a long command, and you don't want to keep navigating around the terminal with
      the
      arrow keys etc.
   </p>
</tip>


## Useful Configs

*(click to expand content)*

### Easy Navigation {collapsible="true"}

Navigating through the filesystem on Linux or any operating system is annoying and tiring- but not anymore.
The `zsh` alias below will allow you to fuzzyfind through everything in the current directory, **AND it will `cd` into 
the directory of item you have selected** !!

<br />

AND it will **ignore** the `node_modules` folder and all dotfiles `.*`.

<br />

```Bash
alias dc='noglob cd "$(dirname "$(find "$PWD" -type d \( -name ".*" \) -prune -o -type f -print | grep -v "node_modules" | fzf)")"'
```

<br />

Add this to your `~/.zshrc` and watch the magic happen. I recommend that you change the alias `dc` to something else
that you'll remember. I named it `dc` since its the opposite of `cd`.

<br />

Watch the video below to see it in action.

<p></p>

<video src="../videos/dc_alias_zshrc.mp4" mini-player="false" preview-src="25Oct2023_0119hrs.png" />

<p>
<br />
<br />
</p>


### Vim Navigation Aliases {collapsible="true"}

Sometimes you wanna open a file in vim/neovim, but you don't want to waste your time looking around with `cd` and
so on. A simple fix for this is using `fzf` in the neovim/vim command to open a file

<br />

```Bash
nvim $(fzf)
```

<br />

It's that simple!

You can add aliases for this to save some keystrokes. Below is an alias I use since I don't want it to clash with `nvim`
or `vim`

<br />

```Bash
alias xvim='/snap/bin/nvim $(fzf)'

# replace the location of snap/bin/nvim with the location of your neovim binary or just use the command itself

alias xvim='nvim $(fzf)'
```

<br />

Now you can open up a file in vim without going through the pain of navigating the filesystem.

