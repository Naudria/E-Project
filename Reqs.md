* Care - Contact Engie from Help center page (SPRINT 1)

As a customer, I want to be able to contact ENGIE via the help center page so that I can email/contact someone on the Care team.
As a customer, under the Help Center section in the footer, I will click on the Contact Us link and it will bring up the Help Center page that would allow me to email the help center at custserve@na.engie.com
When the user clicks the Contact Us button in the footer, they will be taken to the Help Center page. 

Help Center page will have 3 panels (see mock up) 
Email
Call 
Live Chat 
Email 
The Email panel should contain a "Message Us" button within the panel. 
Clicking this button should display an email window with the To field defaulted to custserve@na.engie.com. The remaining email fields will remain blank for the user to fill in. When the email is sent, it will be sent to custerve@na.engie.com. 

Call 
Contains the help center phone number and hours of operation 

Live Chat 
The Live Chat panel will be disabled 

Below the three panels will show Billing & Payment and contain the following sections:
Corporate headquarters
Wire electronic payment to:
Mail payments to:
Mail overnight payments to:
Mail notes and letters to: (in a separate envelope) 
Other


* Billing Detail - View All Associated Utility Accounts (SPRINT 2)

As a customer, I want to view all utility accounts associated with my userid profile.

Miscellaneous - Link all your utility accounts - this feature is also needed for phase 1 as it is related to the welcome mail feature. In discussions with Brian, we have arrived at a technical design that leverages the Azure message bus for us receiving updates about new customers and new billing accounts being added to an existing customer. That same capability is what we will rely on for sending out the welcome emails.


As a user, I will have the ability to search by the following on the account list page:
Utility Account
Bill Account
Service Address - Address, City, State, Zip
Other Filtering dropdown (Show All Accounts, Show Only Accounts with a Balance, Show Only Accounts Enrolled in EFT, Show Only accounts eligible for Epay, Show Only Active Accounts, Show Only FInalled Accounts)


As a user, I will have the ability to export the grid to excel


* Account Detail - Account Information (SPRINT 2)

As a user, I want to be able to see the following information under the Account Information section on the Account Detail page:
Account Name
Service Type
Account Owner
EDC Account Number
EDC
Bill Account
Account Balance
Due By

* Log in to the customer portal (successful & unsuccessful) 

As a user, I want the ability to enter my email address and password on the login screen so 
that I can log in to the customer self-service portal. 
If log in attempt is unsuccessful, I will see the following message - "The email address/password combinations is not valid."
If the system isn't able to successfully authenticate me twice, I will see the following message - "The email address/password combination is not valid. [Line Break]For security reasons, after 3 more failed login attempt(s) your account will be locked. Would you like to reset your password?"
This should continue to count down as the system is not able to authenticate me each time. 
As a user, when I login I want to be taken to the customer portal landing page when I click on the Sign In button (and sign in is successful) 

Show/Hide Password (mask or unmask) 
As a user I want to be able to click on "Show" in the password field so that I  can view the password as unmasked
Show will toggle with Hide so that once the password is visible I can then mask the password again 
Forgot Password 
As a user I want to be able to click on Forgot password? and be taken to the Forgot password screen
Initiate Payment without sign in 
As a user I want to have the ability to initiate a payment without having to log into the customer portal.  
As a user, I want to to be able to initiate a payment without having to log into the customer portal.  I will see the following text/link so that i can initiate a payment without signing in:  "Just need to make a payment?  Continue without signing in" 
Clicking on the "Continue without signing in" will take me to the Forte Modal
