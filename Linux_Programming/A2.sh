#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 &
child_pid = "$!"
