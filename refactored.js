const newRiceCooker = () => {
  let isRicePresent = false;
  let isRiceCooked = false;
  let isSteaming = false;
  let isHeating = false;

  return {
    isRiceCooked,
    isRicePresent,
    isSteaming,
    isHeating,
    addRice() {
      if (isRicePresent) {
        console.log('There\'s already rice in the rice cooker.');
        return;
      }
      isRicePresent = true;
      console.log('Rice has been added.');
    },
    async cookRice() {
      if (isRiceCooked) {
        console.log('The rice is already cooked.');
        return;
      }
      if (!isRicePresent) {
        console.log('Cannot cook. The rice cooker is empty.');
        return;
      }
      console.log('Cooking rice...');
      await delay(1500);
      isRiceCooked = true;
      console.log('The rice has been cooked!');
    },
    async steam() {
      if (isSteaming) {
        console.log('Steaming is already in progress.');
        return;
      }

      if (!isRicePresent) {
        console.log('Cannot steam. The rice cooker is empty.');
        return;
      }

      console.log('Steaming in progress...');
      isSteaming = true;
      await delay(1500);
      isSteaming = false;
      console.log('Steaming completed!');
    },
    keepWarm() {
      if (isHeating) {
        console.log('Keeping warm is already in progress.');
        return;
      }
      if (!isRicePresent) {
        console.log('Cannot keep warm. The rice is not cooked.');
        return;
      };
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
    },
    removeRice() {
      if (!isRicePresent || !isRiceCooked) {
        console.log('There\'s no rice to remove or it is not cooked yet.');
        return;
      }
      isRicePresent = false;
      isRiceCooked = false;
      isSteaming = false;
      isHeating = false;
      console.log('The rice has been removed from the rice cooker.');
    },
    delay: ms => {
      const start = Date.now();
      while (Date.now() - start < ms) { }
    }
  }
}

export function simulateRiceCooker(riceCooker) {
  displayMenu();
  const input = prompt("Enter your choice: ");

  if (!input) {
    console.log("Invalid input");
    return simulateRiceCooker(riceCooker);
  }

  const choice = parseInt(input);

  if (!choice) {
    console.log("Invalid input. Please enter a valid number.");
    return simulateRiceCooker(riceCooker);
  }

  switch (choice) {
    case 1:
      riceCooker.addRice();
      break;
    case 2:
      riceCooker.cookRice();
      break;
    case 3:
      riceCooker.steam();
      break;
    case 4:
      riceCooker.keepWarm();
      break;
    case 5:
      riceCooker.removeRice();
      break;
    case 6:
      console.log("Thank you for using the Rice Cooker Simulator. Goodbye!");
      return;
    default:
      console.log("Invalid choice. Please select a valid option.");
  }
  return simulateRiceCooker(riceCooker);
}

const riceCooker = newRiceCooker();
simulateRiceCooker(riceCooker);
