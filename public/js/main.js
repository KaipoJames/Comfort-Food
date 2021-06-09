
// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
import { Member } from "./classes/member.js";
import { Bank } from "./classes/bank.js";

const main = {
  init() {
    const myBank = new Bank("Nuson-Bank", "0010F");

    const michelle = new Member("Michelle", "Marlin");

    //michelle.printInfo();

    myBank.addMember(michelle);
    myBank.addAccount("checking", michelle);
    myBank.addAccount("savings", michelle);

    myBank.printAccounts();
    myBank.printMembers();

    for (const account of myBank.accounts) {
      console.log(account);
    }

    console.log("INFORMATION");
    const checkingAc = myBank.getAccount(
      "Michelle Marlin",
      "Michelle-account-checking"
    );
    const savingsAc = myBank.getAccount(
      "Michelle Marlin",
      "Michelle-account-savings"
    );

    checkingAc.deposit(300);
    savingsAc.deposit(300);

    //michAccount.showLastTrans();
    //michAccount.printAccountInfo();

    checkingAc.transfer(savingsAc, 120);

    for (const account of myBank.accounts) {
      console.log(account);
    }

    //michAccount.withdraw(30.5);
    //michAccount.printAccountInfo();
    //michAccount.showLastTrans();
  },
};

//main.init();

const learnMoreBtn = document.querySelector(".button");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    location.href = "/about";
  })
}
