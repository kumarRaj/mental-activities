const Activity = require('../models/activity.js');

exports.generateFixedActivities = function() {
    const activities = [
        new Activity(
            1,
            "Meditation for Relaxation",
            "A guided meditation session to help you relax and unwind.",
            "Relaxation",
            "30 minutes",
            "Beginner",
            "Join this guided meditation session designed to promote relaxation and reduce stress."
        ),
        new Activity(
            2,
            "Self-Esteem Workshop",
            "Activities and discussions to boost your self-confidence.",
            "Self-Esteem",
            "2 hours",
            "Intermediate",
            "Participate in activities and discussions aimed at improving your self-esteem and confidence."
        ),
        new Activity(
            3,
            "Productivity Hacks",
            "Learn techniques to improve your productivity and efficiency.",
            "Productivity",
            "1 hour",
            "Beginner",
            "Discover productivity hacks and techniques that can help you accomplish more in less time."
        ),
        new Activity(
            4,
            "Outdoor Fitness Class",
            "A physical workout session to enhance your physical health.",
            "Physical Health",
            "1 hour",
            "Intermediate",
            "Join our outdoor fitness class to improve your physical health with a variety of exercises."
        ),
        new Activity(
            5,
            "Community Potluck",
            "A social event to foster connections and enjoy good food.",
            "Social Connection",
            "3 hours",
            "Beginner",
            "Bring a dish and join our community potluck to meet new people and foster social connections."
        )
    ];

    return activities;
}