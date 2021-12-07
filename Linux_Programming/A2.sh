#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 & #30 second pause to not overwhelm the execution
Child_PID = "$!" #Defining the Process ID of the most recent background process
#Displays the PID of the current child process
echo "Child PID is $Child_PID" 
echo "Child process with PID $Child_PID is now in the OS waiting queue." #Prints the message
echo "The child process is waiting for a software interrupt from the user." #Echos the message to the output on terminal
echo "Enger the SIGINT interrupt to have the child process execute on the CPU."
kill -2 $Child_PID #Moves child process from running state to the waiting state
trap kill -1 #traps the process of the move
echo "Enter SIGQUIT interrupt." #Prints to the stdout
kill $Child_PID #Moves the child process again
trap kill -1 #traps the process of the move
echo "Completed executing." #Prints 'Completed executing.' to the stdout
echo "Terminating all processes." #Prints 'Terminating all processes.' to the stdout
exit 1 #Exits out of the program with no errors