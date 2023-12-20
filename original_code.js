import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

// time: O(1)
// space: O(1)
export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,
 
  // O(1)
  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
    } else {
      console.log('There\'s already rice in the rice cooker.');
    }
  },
 
  // O(1)
  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this.ricePresent) { 
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
  },
 
  // O(1)
  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    } else if (!this.ricePresent) { 
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
  },
 
  // O(1)
  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
    } else {
      console.log('Keeping warm is already in progress.');
    }
  },
 
  // O(1)
  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  },
 
  // O(ms)
  delaySync(ms) { 
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};

// time = space = O(1)
export function simulateRiceCooker() {
  let input;
  const condition = true; // 1

  // Never ends, well, it would, but not properly:(
  while (condition) { // O(1) because the number of operation doesn't depend on the size of input
    displayMenu(); // 1
    input = prompt('Enter your choice: '); // 1

    if (input) { // 1
      const choice = parseInt(input); // 1

      if (!isNaN(choice)) {  // 1
        if (choice === 1) {  // 1
          riceCooker.addRice(); // 1
        } else if (choice === 2) { // 1
          riceCooker.cookRice();
        } else if (choice === 3) { // 1
          riceCooker.steam();
        } else if (choice === 4) { // 1
          riceCooker.keepWarm();
        } else if (choice === 5) { // 1
          riceCooker.removeRice();
        } else if (choice === 6) { // 1
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!'); // 1
          break;
        } else { // 1
          console.log('Invalid choice. Please select a valid option.'); // 1
        }
      } else {
        console.log('Invalid input. Please enter a valid number.'); // 1
      }
    } else {
      console.log('No input provided.'); // 1
    }
  }
}

simulateRiceCooker();
