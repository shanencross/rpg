const canFight = (state) => ({
  fight: (target) => {
    return `${state.name} slashes at the ${target.name}`;
    //damage function here
  }
})