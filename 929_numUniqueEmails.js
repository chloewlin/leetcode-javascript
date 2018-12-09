// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail 
// sent there will be forwarded to the same address without dots in the local name.  For example, 
// "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this 
// rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. 
// This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  
// (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually 
// receive mails? 

// Example 1:
// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

// Note:
// 1 <= emails[i].length <= 100
// 1 <= emails.length <= 100
// Each emails[i] contains exactly one '@' character.

// Solution: Brute Force
var numUniqueEmails = function(emails) {
  var count = {};
  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];
    for (var j = 0; j < email.length; j++) {
      if (email[j] === '@') {
        var local = email.slice(0, j).replace(/\./g, '');  // remove the dots;
        var firstPlus = local.indexOf('+');
        var newLocal = local.slice(0, firstPlus);  // remove everything after plus
        var newMail = newLocal + email.slice(j) // generate new email
        // console.log(newLocal);
        if (!count[newMail]) {
          count[newMail] = 1;
        } 
      }
    }
  }
  
  return Object.keys(count).length;
};

console.log(numUniqueEmails(["alice.z@leetcode.com", "alicez@leetcode.com" ])); // 1
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); // 2