---
title: Networking
description: System Administration
---

## Logs

Tcpdump is a popular tool to log network traffic, but all the output can be
overwhelming and confusing to read and sort through.

These commands and scripts can help to reduce the pain of reading the shitload
of output that `tcpdump` gives.

First, we need to send the output of `tcpdump` to a file. This can be done in
many ways such as using the `-w` option or just sending the standard output to
a file using the arrow `>` and we have to let `tcpdump` run in the background.

For these examples, we'll be using the arrow `>` to do most of the work.

### Unique Tcpdump Logs

The most common way to log network traffic of a specific network interface
(i.e. `wlan0`, `eth0`, `docker0`) would be to specify the interface with the
`-i` option.
    
:::note
Remember to replace `eth0` with the interface that you want to log traffic from
:::

```bash title="SSH Terminal"
sudo tcpdump -i eth0 -q > network_logs.txt
```

This will log all network traffic from the network interface `eth0` to the file
`network_logs.txt`

Your terminal will not show any output since its all the output is being sent
to the `network_logs.txt` file. To resume what you were doing before running
this command, you'll have to send it to the background or disown it.

The way I do this is I use `nohup` with an `&` at the end so that the terminal
is usable while tcpdump is running.

```bash title="SSH Terminal"
sudo nohup tcpdump -n -i eth0 -q -l > networ_logs.txt &
```

This will let tcpdump do its thing in the background. To check if its actually
running, you can use the `ps` command.

```bash title="SSH Terminal"
ps -a
```

This will show the running processes, and you should see tcpdump with its
process ID next to it. Now you can check the network logs by reading the
contents of the text file. This can be done with `cat network_logs.txt` or
`tail -f network_logs.txt` if you want to see the logs in real time.

To stop tcpdump, I recommend using `pgrep` and `pkill` since you don't need to
type in the long process IDs.

```bash
# To get the process ID of tcpdump
pgrep tcpdump

# To kill all tcpdumps that are currently running
sudo pkill tcpdump

# example output below
sudo pkill tcpdump
[1]  + 1391656 done       sudo nohup tcpdump -n -i eth0 -q -l > network_logs.txt
```

Even after all of this, your network logs will look really messy. What I do to
make things easier to read is that I only log the IP's. By that, I mean, only
unique IP addresses will be shown so that there are no duplicates and so that
its less messy.

To do this I use `awk`, `sort` and `uniq` and a `.pcap` file so that tcpdump
can read it better (? I think). The commands below log the network traffic and
then read all the unique IP's from the `.pcap` file.

```bash
# write (-w) network logs to a pcap file
sudo nohup tcpdump -n -i eth0 -q -l -w network_logs.pcap &

# read the network logs but only show the unique IP addresses
tcpdump -r network_logs.pcap -nn | awk '{print $3}' | awk -F "." '{print $1"."$2"."$3"."$4}' | sort | uniq
```

Now all the unique IP addresses will be shown in the terminal.

Piping the output through ` | less` may be a good idea if there's a lot of
network traffic, so you can search through them.




