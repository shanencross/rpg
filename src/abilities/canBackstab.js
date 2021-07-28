const canBackstab = (state) => ({
  backstab: (target) => {
    if(state.inStealth == true) {
      return `${state.name} backstabs target!`;
      //<fight/damage function thing here>
    }
    else {
      return `${state.name} isn't sneaking`;
    }
  }
})