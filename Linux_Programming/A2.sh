#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 & #30 second pause to not overwhelm the execution
Child_PID = "$!" #Defining the Process ID of the most recent background process
#Displays the PID of the current child process
echo "Child PID is $Child_PID" 
#To test to see the parent and child process is as follows:
#echo "ps -a -o pid,pgid:"
#wait "`ps -a -o pid,pgid,cmd`"
echo "Child process with PID $Child_PID is now in the OS waiting queue." #Prints the message
echo "The child process is waiting for a software interrupt from the user." #Echos the message to the output on terminal
echo "Enter the SIGINT interrupt to have the child process execute on the CPU." #Echos 'Enter the SIGINT interrupt to have the child process execute on the CPU.' to the stdout
trap $Child_PID #Moves child process from running state to the waiting state
echo "Enter SIGQUIT interrupt." #Prints to the stdout
trap $Child_PID #Moves the child process again
echo "Completed executing." #Echos 'Completed executing.' to the stdout
echo "Terminating all processes." #Prints 'Terminating all processes.' to the stdout
exit 2 #Exits out of the program with no errors