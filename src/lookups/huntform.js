const form = {
  addOns: [
    {
      title: "Choose a Time",
      opts: [
        "morning (morning hunts begin at 9am)",
        "afternoon (afternoon hunts begin at 1pm)",
      ]
    },
    {
      title: "Bird Cleaning",
      desc: "whole breast only, no plucking",
      opts: [
        "$3/bird, (bagged and tagged) – only charged per bird suitable for table.",
      ],
    },
    {
      title: "Wobble Trap Warm-up",
      desc: "bring your own factory-made shells",
      defaultSelection: 1,
      opts: [
        "50 clays: $20 (half-day hunt)",
        "100 clays $40 (full-day hunt)",
      ],
    },
    {
      title: "Branded Apparel",
      desc: "adult sizes S through 3XL",
      defaultSelection: 2,
      opts: [
        "Quill Feather branded sweatshirt: $40/ea.",
        "4-pack Quill Feather branded sweatshirt: $140 (save $20)",
        "Quill Feather branded t-shirt: $20/ea.",
        "4-pack Quill Feather branded t-shirt: $70 (save $10)",
      ],
    }
  ]
}

export { form }
