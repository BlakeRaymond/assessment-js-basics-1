/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefiniton = "git is a version control that allows you to save a repository of code on your local machine. It allows you to see what changes have been made over time, like a 'code journal'."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "gitHub is an online version of your repository, or a cloud version. It does the same things as git, but allows collaboration and access from anywhere with an internet connection to your projects."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = "Git Init is what you type into the bash/zsh shell to initialize your 'git' or repository. It creates an empty 'git' file that is where your repository will be stored."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = "git clone is your command that you type into the bash shell that allows you to make a copy of a repository from github onto your local machine."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = "git status is a command you type into your bash shell that allows you to see the status of your files, for instance whether code has been staged/saved, uploaded, and stored on gitHub"

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = "the gitAddDefinition function allows you to save your code in it's current state."
let gitAddCode = "git add ." //('.' can also be a fileName)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "git Commit function allows you to save your work permanently to your 'git' file. It is no longer removable. Once committed, it is ready for upload."
const getCommitCode = "git commit -m ' '" //where "m" commands 'message' to be placed between "' '"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = "This is the final step. This is where we push/upload our local repository to gitHub for online access."