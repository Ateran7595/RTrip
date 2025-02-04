export const travelPreference = {
    objName: "travelPreference",
    question: 'What kind of destination excites you the most?',
    options: [
    {
        id: 1, 
        icon: '🏄🏼',
        title: 'Beach',
        desc: 'Sun, sand, and waves – paradise awaits!'
    },
    {
        id: 2, 
        icon: '⛰️',
        title: 'Mountains',
        desc: 'Fresh air, stunning views, and endless adventure!'
    },
    {
        id: 3, 
        icon: '🏙️',
        title: 'City',
        desc: 'Bright lights, busy streets, and endless excitement!'
    },
    {
        id: 4, 
        icon: '🌳',
        title: 'Countryside',
        desc: 'Peaceful vibes, green fields, and starry nights!'
    },
]   
}

export const travelBudget = {
    objName: "budget",
    question: 'What is your travel budget?',
    options: [
    {
        id: 1, 
        icon: '💸',
        title: 'Low Budget',
        desc: 'Take it slow and enjoy the simple joys!'
    },
    {
        id: 2, 
        icon: '💰',
        title: 'Normal Budget',
        desc: 'Balance fun and finances – a solid choice!'
    },
    {
        id: 3, 
        icon: '🏦',
        title: "Don't Worry About It",
        desc: 'Luxury, extravagance, and pure indulgence!'
    }
]  
}

export const travelActivities = {
    objName: "activity",
    question: 'What kind of activities do you enjoy while traveling?',
    options: [
    {
        id: 1, 
        icon: '🎭',
        title: 'Cultural & History',
        desc: 'Museums, landmarks, and deep history await!'
    },
    {
        id: 2, 
        icon: '🥾',
        title: 'Outdoor & Adventure',
        desc: 'Hiking, rafting, and adrenaline-filled fun!'
    },
    {
        id: 3, 
        icon: '🍽️',
        title: 'Food & Drink',
        desc: 'Taste your way through local flavors!'
    },
    {
        id: 4, 
        icon: '🛍️',
        title: 'Shopping & Luxury',
        desc: 'High-end brands, souvenirs, and retail therapy!'
    },
]
}
    
export const travelClimate = {
    objName: "climate",
    question: 'What kind of climate do you enjoy the most?',
    options: [
        {
            id: 1, 
            icon: '☀️',
            title: 'Warm & Sunny',
            desc: 'Soak up the sun with blue skies and beach vibes!'
        },
        {
            id: 2, 
            icon: '❄️',
            title: 'Cold & Snowy',
            desc: 'Cozy up in a winter wonderland!'
        },
        {
            id: 3, 
            icon: '🌦️',
            title: 'Mild & Rainy',
            desc: 'Cool breezes, light drizzles, and peaceful walks!'
        },
        {
            id: 4, 
            icon: '🍂',
            title: 'Seasonal & Mixed',
            desc: 'Experience a mix of colors, crisp air, and change!'
        },
    ]
}

export const travelCompanions = {
    objName: "companion",
    question: "Who’s coming along for the adventure?",
    options: [
        {
            id: 1, 
            icon: '👩‍❤️‍👨',
            title: 'Romantic Couple',
            desc: 'Love is in the air – perfect for couples!'
        },
        {
            id: 2, 
            icon: '👨‍👩‍👧‍👦',
            title: 'Family Trip',
            desc: 'Fun for all ages with kid-friendly activities!'
        },
        {
            id: 3, 
            icon: '🧑‍🤝‍🧑',
            title: 'Friends Adventure',
            desc: 'Unforgettable memories with your crew!'
        },
        {
            id: 4, 
            icon: '🧘‍♂️',
            title: 'Solo Travel',
            desc: 'Go at your own pace and explore freely!'
        },
    ]
}

export const AI_PROMPT = 'Generate a random travel plan based on the following preferences: Destination Type: {travelPreference} Budget: {budget} Activities: {activity} Climate Preference: {climate} Travel Companions: {companion} Travel Plan Details: Suggested Destination Name of the destination Country & city details A short description explaining why it fits the preferences Geographic coordinates (latitude, longitude) Itinerary (Day-by-Day Plan) Each day should include: placeName: The name of the attraction/landmark placeDetails: A brief description of the place and why it’s worth visiting placeImageURL: A direct image link for the attraction Hotel Options At least 3 hotel recommendations, each with: Hotel Name Star Rating (e.g., 3-star, 4-star, 5-star) Price Range (low, mid-range, luxury) Description (briefly highlighting unique features) Geo Coordinates (latitude, longitude) Guest Rating (out of 5) Interesting & Unique Facts Provide at least three surprising or little-known facts about the destination. Can be about local culture, history, hidden gems, or fun trivia. General Travel Tips Advice based on the location, such as safety, best time to visit, cultural etiquette, or must-try foods. Estimated Cost Summary A rough estimate of the overall cost based on the budget level. Please format the response in valid JSON format.'