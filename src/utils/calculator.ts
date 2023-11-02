export function calculateDelaysAndReverb(bpm: number) {
  const baseDelay = 60000 / bpm;

  function convertToNumber(string: string) {
    return parseFloat(string).toFixed(2);
  }

  function transformValues(obj: any) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        obj[key] = transformValues(obj[key]);
      } else {
        obj[key] = convertToNumber(obj[key]);
      }
    }
    return obj;
  }

  const rawResults = {
    // Regular Note Delays
    wholeNote: baseDelay * 4,
    halfNote: baseDelay * 2,
    quarterNote: baseDelay,
    eighthNote: baseDelay / 2,
    sixteenthNote: baseDelay / 4,
    thirtySecondNote: baseDelay / 8,
    sixtyFourthNote: baseDelay / 16,
    oneHundredTwentyEighthNote: baseDelay / 32,
    twoHundredFiftySixthNote: baseDelay / 64,
    fiveHundredTwelfthNote: baseDelay / 128,

    // Dotted Note Delays
    dottedWholeNote: baseDelay * 4 * 1.5,
    dottedHalfNote: baseDelay * 2 * 1.5,
    dottedQuarterNote: baseDelay * 1.5,
    dottedEighthNote: (baseDelay / 2) * 1.5,
    dottedSixteenthNote: (baseDelay / 4) * 1.5,
    dottedThirtySecondNote: (baseDelay / 8) * 1.5,
    dottedSixtyFourthNote: (baseDelay / 16) * 1.5,
    dottedOneHundredTwentyEighthNote: (baseDelay / 32) * 1.5,
    dottedTwoHundredFiftySixthNote: (baseDelay / 64) * 1.5,
    dottedFiveHundredTwelfthNote: (baseDelay / 128) * 1.5,

    // Triplet Delays
    tripletWholeNote: baseDelay * 4 * (2 / 3),
    tripletHalfNote: baseDelay * 2 * (2 / 3),
    tripletQuarterNote: baseDelay * (2 / 3),
    tripletEighthNote: (baseDelay / 2) * (2 / 3),
    tripletSixteenthNote: (baseDelay / 4) * (2 / 3),
    tripletThirtySecondNote: (baseDelay / 8) * (2 / 3),
    tripletSixtyFourthNote: (baseDelay / 16) * (2 / 3),
    tripletOneHundredTwentyEighthNote: (baseDelay / 32) * (2 / 3),
    tripletTwoHundredFiftySixthNote: (baseDelay / 64) * (2 / 3),
    tripletFiveHundredTwelfthNote: (baseDelay / 128) * (2 / 3),

    // Regular Note Frequencies
    wholeNoteFreq: 1000 / (baseDelay * 4),
    halfNoteFreq: 1000 / (baseDelay * 2),
    quarterNoteFreq: 1000 / baseDelay,
    eighthNoteFreq: 1000 / (baseDelay / 2),
    sixteenthNoteFreq: 1000 / (baseDelay / 4),
    thirtySecondNoteFreq: 1000 / (baseDelay / 8),
    sixtyFourthNoteFreq: 1000 / (baseDelay / 16),
    oneHundredTwentyEighthNoteFreq: 1000 / (baseDelay / 32),
    twoHundredFiftySixthNoteFreq: 1000 / (baseDelay / 64),
    fiveHundredTwelfthNoteFreq: 1000 / (baseDelay / 128),

    // Dotted Note Frequencies
    dottedWholeNoteFreq: 1000 / (baseDelay * 4 * 1.5),
    dottedHalfNoteFreq: 1000 / (baseDelay * 2 * 1.5),
    dottedQuarterNoteFreq: 1000 / (baseDelay * 1.5),
    dottedEighthNoteFreq: 1000 / ((baseDelay / 2) * 1.5),
    dottedSixteenthNoteFreq: 1000 / ((baseDelay / 4) * 1.5),
    dottedThirtySecondNoteFreq: 1000 / ((baseDelay / 8) * 1.5),
    dottedSixtyFourthNoteFreq: 1000 / ((baseDelay / 16) * 1.5),
    dottedOneHundredTwentyEighthNoteFreq: 1000 / ((baseDelay / 32) * 1.5),
    dottedTwoHundredFiftySixthNoteFreq: 1000 / ((baseDelay / 64) * 1.5),
    dottedFiveHundredTwelfthNoteFreq: 1000 / ((baseDelay / 128) * 1.5),

    // Triplet Note Frequencies
    tripletWholeNoteFreq: 1000 / (baseDelay * 4 * (2 / 3)),
    tripletHalfNoteFreq: 1000 / (baseDelay * 2 * (2 / 3)),
    tripletQuarterNoteFreq: 1000 / (baseDelay * (2 / 3)),
    tripletEighthNoteFreq: 1000 / ((baseDelay / 2) * (2 / 3)),
    tripletSixteenthNoteFreq: 1000 / ((baseDelay / 4) * (2 / 3)),
    tripletThirtySecondNoteFreq: 1000 / ((baseDelay / 8) * (2 / 3)),
    tripletSixtyFourthNoteFreq: 1000 / ((baseDelay / 16) * (2 / 3)),
    tripletOneHundredTwentyEighthNoteFreq: 1000 / ((baseDelay / 32) * (2 / 3)),
    tripletTwoHundredFiftySixthNoteFreq: 1000 / ((baseDelay / 64) * (2 / 3)),
    tripletFiveHundredTwelfthNoteFreq: 1000 / ((baseDelay / 128) * (2 / 3)),

    // Reverb Times
    reverbHall: {
      preDelay: baseDelay / 8,
      decayTime: baseDelay * 4 * 2 - baseDelay / 8,
      totalReverbTime: baseDelay * 4 * 2, // For 2 bars
    },
    reverbLargeRoom: {
      preDelay: baseDelay / 16,
      decayTime: baseDelay * 4 - baseDelay / 16,
      totalReverbTime: baseDelay * 4, // For 1 bar
    },
    reverbSmallRoom: {
      preDelay: baseDelay / 32,
      decayTime: baseDelay * 2 - baseDelay / 32,
      totalReverbTime: baseDelay * 2, // For 1/4 note
    },
    reverbTightAmbience: {
      preDelay: baseDelay / 128,
      decayTime: baseDelay - baseDelay / 128,
      totalReverbTime: baseDelay, // For 1/8 note
    },
  };

  return transformValues(rawResults);
}
