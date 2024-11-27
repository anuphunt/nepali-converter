interface Fact {
  fact: string;
}

export const facts: Record<string, Fact[]> = {
  landHill: [
    { fact: "1 Ropani is approximately the size of a small football field." },
    { fact: "1 Daam, the smallest unit of land in the Ropani system, is just 1.99 square meters." },
    { fact: "1 Ropani equals 508.72 square meters or 5476 square feet." },
    { fact: "1 Aana is 1/16th of a Ropani, equivalent to 31.8 square meters." },
    { fact: "1 Daam is equivalent to 21.39 square feet, a size suitable for small-scale farming plots." },
    { fact: "In traditional agriculture, 1 Ropani was the area an oxen pair could plow in a day." },
    { fact: "The Ropani system is used in the hilly regions and reflects traditional farming practices." },
    { fact: "1 Square Meter is equivalent to approximately 0.00196 Ropani." }
  ],
  landTerai: [
    { fact: "The Bigha system is widely used in the Terai region and originates from the Mughal era." },
    { fact: "1 Bigha equals 20 Kattha or 6772.63 square meters, making it the largest land unit in the Terai." },
    { fact: "1 Kattha is 20 Dhur, commonly used in the Terai for small land transactions." },
    { fact: "1 Dhur, the smallest unit in the Terai, is just 16.93 square meters." },
    { fact: "1 Kattha is approximately the size of a small residential plot in the Terai region." },
    { fact: "1 Bigha is nearly equal to 1.6 acres in modern land measurements." },
    { fact: "The Terai land measurement system reflects Nepal's flat geography and larger agricultural plots." }
  ],
  weight: [
    { fact: "1 Pathi, a traditional unit of weight, was historically used to measure rice and maize." },
    { fact: "1 Pau is traditionally equivalent to 0.25 kilograms, or 250 grams." },
    { fact: "1 Pathi is approximately 4.54 kilograms or 8 liters, depending on whether it's used for weight or volume." },
    { fact: "1 Mana is 1/8th of a Pathi, which translates to about 0.568 kilograms." },
    { fact: "1 Pau is often used to measure cooking oil and ghee in traditional Nepali households." },
    { fact: "1 Muthi, a smaller unit, is roughly the volume of a fistful of grain." },
    { fact: "In Dashain, large quantities of rice and oil are measured in Mana and Pathi." },
    { fact: "The Tola system was historically used for trading spices and precious metals in South Asia." },
    { fact: "1 Tola equals 11.66 grams and is primarily used to measure precious metals like gold." },
    { fact: "1 Pathi is traditionally considered the amount of grain needed to feed a small family for a day." },
    { fact: "Many Nepali households still measure grains in Mana and Pathi for daily use." }
  ],
  volume: [
    { fact: "1 Mana is approximately 0.568 liters, commonly used for measuring oil or grains." },
    { fact: "1 Pathi can hold up to 8 liters of water or other liquids." },
    { fact: "The Pathi was historically a multifunctional unit, used for both weight and volume." },
    { fact: "Mana and Pau are commonly used to measure traditional Nepali drinks like Chhyang and Rakshi." },
    { fact: "1 Pau, when used for measuring flour, represents a typical serving size for bread making." },
    { fact: "Traditional markets in Nepal often use Mana and Pau to sell ghee and honey." }
  ],
  length: [
    { fact: "1 Haath, meaning 'hand' in Nepali, measures the length from the elbow to the fingertip." },
    { fact: "A Kos is roughly the distance a person can walk in 30 minutes, about 3.2 kilometers." },
    { fact: "1 Kos equals 1.997 miles, making it a unique blend of traditional and modern measurements." },
    { fact: "The Kos unit is still used informally in rural areas to describe distances." },
    { fact: "1 Haath is equal to 0.457 meters or 1.5 feet." },
    { fact: "In folk tales, the distance of a Kos often represents a long journey through hilly terrain." },
    { fact: "1 Kos is frequently mentioned in folk tales to describe journeys between villages." },
    { fact: "1 Haath was a practical unit for measuring cloth or ropes in traditional markets." }
  ]
};