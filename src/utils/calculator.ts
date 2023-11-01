export function calculateDelaysAndReverb(bpm:number) {
    const baseDelay = 60000 / bpm;
  
    return {
      // Regular Note Delays
      wholeNote: baseDelay * 4,
      wholeNotefreq: 1000 / (baseDelay * 4),
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
      dottedWholeNote: (baseDelay * 4) * 1.5,
      dottedHalfNote: (baseDelay * 2) * 1.5,
      dottedQuarterNote: baseDelay * 1.5,
      dottedEighthNote: (baseDelay / 2) * 1.5,
      dottedSixteenthNote: (baseDelay / 4) * 1.5,
      dottedThirtySecondNote: (baseDelay / 8) * 1.5,
      dottedSixtyFourthNote: (baseDelay / 16) * 1.5,
      
      // Triplet Delays
      tripletWholeNote: (baseDelay * 4) * (2/3),
      tripletHalfNote: (baseDelay * 2) * (2/3),
      tripletQuarterNote: baseDelay * (2/3),
      tripletEighthNote: (baseDelay / 2) * (2/3),
      tripletSixteenthNote: (baseDelay / 4) * (2/3),
  
      // Reverb Times
      reverbHall: {
        preDelay: baseDelay / 8,
        decayTime: (baseDelay * 4 * 2) - (baseDelay / 8) , 
        totalReverbTime: baseDelay * 4 * 2 // For 2 bars
      },
      reverbLargeRoom: {
        preDelay: baseDelay / 16,
        decayTime: (baseDelay * 4) - (baseDelay / 16), 
        totalReverbTime:  baseDelay * 4 // For 1 bar
      },
      reverbSmallRoom: {
        preDelay: baseDelay / 32,
        decayTime: baseDelay - (baseDelay / 32),     
        totalReverbTime: baseDelay // For 1/4 note
      },
      reverbTightAmbience: {
        preDelay: baseDelay / 128,
        decayTime: (baseDelay / 2) - (baseDelay / 128),  
        totalReverbTime:  baseDelay / 2 // For 1/8 note
      }
    };
  }
  