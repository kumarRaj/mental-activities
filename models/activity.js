module.exports = class Activity {
    constructor(title, description, category, duration, difficultyLevel, activityContent) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.duration = duration;
        this.difficultyLevel = difficultyLevel;
        this.activityContent = activityContent;
        this.creationTimestamp = new Date();
    }
}