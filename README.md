# Financial Tracker
This app allows a logged in user to enter, edit, and delete transactions to keep track of financial debits and credits and it keeps a running total of those transactions for the user. The user can also add comments to any transaction if desired.

## Screenshots

This is Transactions page when the user has logged in and hasn't entered any transactions:

![Transactions page](/imgs/1.png)

Clicking the 'Add Transaction' link renders the Add A Transaction page:

![Add A Transaction page](/imgs/2.png)

The Transactions page with the new transaction added and the totals displayed:

![Updated Transactions page](/imgs/3.png)

The Transactions page with two more transactions added:

![2nd updated Transactions page](/imgs/4.png)

Clicking the View dropdown lets one see comments for a specific transaction and it has a link to add a comment:

![Clicking the View dropdown](/imgs/5.png)

A comment is added on the Add Comment page:

![Add Comment page](/imgs/6.png)

Showing the comment that was added to the Electric Bill transaction:

![Showing the comment](/imgs/7.png)

Clicking the Edit button for a transaction allows the user to update that transaction, in this case the amount of the electric bill is changed from $73.29 to $83.29:

![Update transaction page](/imgs/8.png)

Showing the transactions with the updated Electric Bill transaction:

![Updated Transactions page](/imgs/9.png)

Of course, clicking on the Delete button for one transaction will delete that transaction while clicking the Delete All button in the Totals area will delete all of the transactions.



## Technologies Used
- Javascript
- Nodejs
- Expressjs
- Mongoosejs
- MongoDB
- Ejs
- Bootstrap

## Getting Started
The app is located [here] (https://magenta-rose-badger-tutu.cyclic.app)
The Trello board used to plan this project is [here] (https://trello.com/b/g6f1pR50/financial-tracker)

## Next Steps
In the future, the app will include the ability to view the previous month's transactions by clicking a back arrow button. Users will also have the ability to have a transaction recur at a set amount of time (weekly, monthly, etc). Additionally, the app will be styled to be responsive to different monitor sizes.
