class KB {
  constructor(company, numKey, colour, digital_pad) {
    this.company = company;
    this.numKey = numKey;
    this.colour = colour;
    this.digital_pad = digital_pad;
  }

  newColour(newC) {
    this.colour = newC;
  }

  dpad(state) {
    this.digital_pad = state;
  }
}

export default KB;
