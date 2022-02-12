//Most Popular Test
//Highschool Java Group project by: Marko, Joshua, Jerard and Keagan 

import java.io.*; //Import all necessary modules
import java.util.*;
import java.lang.Math;
public class MARKOROPAR_MODE_Test
{
    static public void main (String[] args) throws IOException
    {
 File txtfile = new File ("Marko_Data2.txt");//read text file
 BufferedReader br = new BufferedReader (new FileReader (txtfile));
 String numList[] = new String [1000]; //Making Variables
 int tallyList[] = new int [11];
 int newList[] = new int [11];
 int counter = 0;
 int tally, temp, temp2;
 while ((numList [counter] = br.readLine ()) != null)
 {
     tally = Integer.parseInt (numList [counter]);
     tallyList [tally] += 1; //read the numbers vertically and mark them
     counter += 1; 
 }
 for (int i = 0 ; i < 11 ; i++)
 {
     newList [i] = 1 * i;
 }
 for (int i = 0 ; i < 11 ; i++)
 {
     System.out.println (newList [i] + ":" + tallyList [i]);
 }
 for (int i = 0 ; i < 10 ; i++)
 {
     for (int j = 0 ; j < 10 ; j++)
     {
  if (tallyList [j] > tallyList [j + 1])
  {
      //DOUBLE SWAAAAAAAAAAAAAP(IN DEEP VOICE)
      temp = tallyList [j];
      tallyList [j] = tallyList [j + 1];//
      tallyList [j + 1] = temp;
      temp2 = newList [j];//switched it so it would read the 1st column not the 2nd
      newList [j] = newList [j + 1];
      newList [j + 1] = temp2;
  }
     }

 }
 for (int i = 0 ; i < 10 ; i++)
 {
     if (tallyList [10] == tallyList [9 - i])
     {
  System.out.println ("The most popular number is " + newList [9 - i]);//print Most repeated number
     }
 }
 System.out.println ("The most popular number is " + newList [10]); 
 {
     if ((tallyList [0] == tallyList [0 + i]))//Identify if there are more than 1 lowest number
     {
  System.out.println ("The least popular number is " + newList [0 + i]);//print least repeated number
     }
 }
    }
}
