import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const tutosContent = [
  {
    title: "Using the Pre-Delay & Reverb Time Calculator Effectively",
    content:
      "Our Pre-Delay & Reverb Calculator is designed to subtly enhance your instruments with delay or reverb, connecting them with your track's beat. However, always trust your ears when adjusting settings, as the ideal delay times might vary. Remember, the ultimate goal is to produce a harmonious sound. Stay creative and use the calculator as a guide rather than a strict rulebook!",
  },
  {
    title: "Why Tempo Matters for Reverb",
    content:
      "When tuning reverb settings, professional audio engineers often align them with a track's tempo. This alignment ensures the reverb complements the song's rhythm, creating harmony between beats and echoes. To effortlessly match your reverb settings with your song's BPM, leverage our Pre-Delay and Reverb Time Calculator.",
  },
  {
    title: "Achieving Natural Reverb: The Role of Pre-Delay",
    content:
      "A natural reverb feel can significantly elevate your music. The key lies in setting the right pre-delay, which is the slight pause before the reverb kicks in. This calculator provides widely-used pre-delay and decay time values, but you can tweak them for a personalized groove by adding or subtracting a few milliseconds.",
  },
  {
    title: "Understanding and Calculating Pre-Delay",
    content:
      "To get the desired reverb effect, you might need to experiment with settings. The total reverb time, also known as RT60, signifies the duration it takes for sound levels to diminish by 60 dB. You can adjust the pre-delay to create varied room sizes and perceptions of audience distance, all while maintaining a musical vibe. Here's a simple breakdown: For a BPM of 120, a 1/64 delay time would equal 31.25 ms for the pre-delay. Now, for the decay time, subtract the pre-delay from the total reverb time (e.g., 1000 ms - 31.25 ms = 968.75 ms).",
  },
  {
    title: "Layered Reverbs: Crafting Depth in Tracks",
    content:
      "Incorporating diverse reverb settings for distinct instruments can generate depth in your track. However, be cautious, as overusing reverbs might compromise your mix. One technique is adjusting a room reverb to the snare, ensuring the reverb fades just before the succeeding snare strike. You can further refine your mix by introducing a low- and high-cut on your reverb or utilizing a compressor for more controlled reverb effects.",
  },
  {
    title: "Determining the Acoustic Space Size in Reverb Settings",
    content:
      "When setting up a reverb, many initially focus on adjusting parameters like size or the dry/wet balance. However, the actual perception of a space's size is majorly influenced by the timing of early reflections. These are the initial delays emanating from surfaces like the floor, walls, and ceiling. They provide the critical binaural cues that allow listeners to identify a three-dimensional space. Unlike late reflections, which form a diffused set contributing to the decay of the reverb, early reflections are more distinguishable. To effectively determine the size of an acoustic space, start by adjusting your reverb's mix control to only capture the early reflections. This process is straightforward in platforms like Ableton Live, which has dedicated mix controls for both early and late reflections. By focusing on the early reflections, you can truly understand the essence of the reverb. Once you've set the early reflections, introduce pre-delay to differentiate the original sound from the reverb. In terms of acoustic spatial perception, increasing pre-delay mimics moving the sound source further from the nearest reflective surfaces. This can either suggest a larger space or hint at the listener's positioning within that space. For instance, a minimal pre-delay combined with closely followed early reflections indicates a large room with the listener positioned in a corner. In contrast, significant pre-delay with simultaneous early reflections suggests the listener is in the center of a large room. After setting the pre-delay and determining the size, you can then tweak the mix to modify the late reflections. This secondary adjustment provides additional insights into the nature, size, density, and surfaces of the room.",
  },
  {
    title: "Which type fo reverb to choose?",
    content:
      "In professional music mixing, a variety of reverb configurations are employed to cater to specific instruments or sound groups, such as ‘Drum Room Reverb’ or ‘Snare Tone/Body Verb’. Typically, reverbs can be categorized as 'overt' or 'covert'. Overt reverbs are intentionally conspicuous in the mix, while covert ones are subtle, almost imperceptible, contributing to the depth and dimension of a mix. These can also be termed as ‘dry’ and ‘wet’ reverbs respectively. Dry reverbs are shorter, mimicking small rooms or confined ambient spaces. Their primary role is to introduce presence, clarity, and a nuanced depth to the mix, creating a more lifelike sound. While their influence is subtle, the absence of these reverbs can make a noticeable difference to the listener. Typically, their duration ranges from 200ms to 800ms, depending on the tempo. Wet reverbs, on the other hand, resonate with the expansive feel of chambers, halls, and plates. They introduce a depth and richness to primary elements of a track, such as vocals or lead instruments. However, caution is advised while handling the lower frequencies and length of wet reverbs. Excessive use can lead to a muddled sound, obscuring the mix's clarity and rhythm. Balancing between dry and wet reverbs demands a nuanced understanding. While it's essential to ensure not all elements are overly reverbed, occasionally, multiple reverbs can be applied to a singular sound. The objective is to craft a vivid acoustic space that the listener can mentally visualize. By juxtaposing distant sounds (achieved through wet reverbs) with up-close, distinct ones (achieved with dry reverbs), one can paint a comprehensive sonic picture. Furthermore, using reverb devices as inserts on specific sounds offers the flexibility to diminish the original sound while increasing the dry/wet value, enabling the creation of an intricate soundscape layered with foreground and background elements.",
  },
  {
    title: "Plate Reverb: The Lush Vintage Touch",
    content:
      "Plate reverb simulates the reflections off a large, thin sheet of metal, known as a 'plate'. Historically achieved using an actual metal plate, its bright and dense characteristics are a favorite in studios, adding a smooth quality to vocals and instruments. Though physical plates are now rare, their unique tonal emulations are widely used in digital platforms.",
  },

  {
    title: "Room Reverb: Intimacy and Realness in Your Mix",
    content:
      "Room reverb captures the natural sound reflections within smaller spaces. This reverb, short and distinct, instills a sense of intimacy and immediacy. Perfect for achieving a 'live' feel in recordings, room reverb can make a track sound authentic, as if performed within an actual room, adding depth without overwhelming the original tone.",
  },

  {
    title: "Chamber Reverb: Full-bodied Resonance",
    content:
      "Emulating the acoustics of purpose-built rooms or echo chambers, chamber reverbs offer a balance between room and hall reverbs. Warm and thick, they give instruments a resonant feel. With their versatile nature, they fit a variety of musical genres, bridging the gap between intimate room tones and the grandeur of hall reverbs.",
  },

  {
    title: "Hall Reverb: Spacious Grandeur for Your Tracks",
    content:
      "Hall reverbs imitate the vast acoustics of large spaces like concert halls. Characterized by long decay times and a wide spectrum of reflections, they add a touch of magnificence and depth. Perfect for choir performances, orchestral recordings, or anytime you seek a broad and regal resonance in your sound.",
  },

  {
    title: "Cathedral Reverb: Ethereal and Divine",
    content:
      "Mimicking the massive and echoing qualities of cathedrals and churches, cathedral reverb brings an otherworldly, vast ambiance. With its incredibly long decay and intricate reflections, it’s ideal for creating a heavenly soundscape, finding its place in film scores, ambient tracks, and productions aiming for the sublime.",
  },
  {
    title: "Shimmer Reverb: The Ethereal Elevator",
    content:
      "Shimmer reverb is characterized by its unique pitch-shifted reflections, creating a celestial and dreamlike quality. Often combined with an octave pitch shift, it results in a 'shimmering' texture that elevates any sound to an atmospheric level. Predominantly used to achieve ambient and cinematic feels, it brings an angelic touch to pads, vocals, and lead instruments.",
  },

  {
    title: "Spring Reverb: Vintage Vibes with Character",
    content:
      "Spring reverb employs a set of springs to produce its distinct reflections. A staple in vintage guitar amplifiers, its 'boingy' and warm character stands out, bringing a nostalgic tone. While it has its roots in classic rock and surf music, its quirky resonances have found their way into various contemporary genres, offering a touch of retro charm.",
  },

  {
    title: "Convolution Reverb: Authentic Spaces and Unique Textures",
    content:
      "Convolution reverb, or impulse response reverb, is a sampling of real-world spaces or objects. By using recorded 'impulse responses', it authentically recreates specific environments, from iconic concert halls to the inside of a tin can. This technology enables unparalleled realism, allowing producers to place their sounds in virtually any space imaginable.",
  },

  {
    title: "Optimizing Delay to Enrich Your Tracks",
    content:
      "Adding delay can introduce intriguing dynamics like movement and depth to your tracks. While some modern delay effects synchronize with a track's BPM, others might need manual adjustments. Our Delay and Reverb Time Calculator assists in finding the ideal settings. Exploring different delay times and using multiple delays with varying timings can produce compelling results. Don't hesitate to experiment!",
  },
  {
    title: "Harnessing LFOs in Harmony with Your Tempo",
    content:
      "Low-frequency oscillators (LFOs) produce rhythmic pulses, commonly utilized to modulate various musical equipment. Syncing your LFO with the tempo can craft captivating effects like vibrato and tremolo. Our calculator also displays Hertz values corresponding to different note values, offering diverse opportunities to experiment with LFOs and create unique soundscapes.",
  },
];

const TutosAccordion = () => {
  return (
    <Accordion fullWidth={true}>
      {tutosContent.map((tuto, i) => (
        <AccordionItem key={i} aria-label={`Accordion ${i}`} title={tuto.title}>
          {tuto.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TutosAccordion;
