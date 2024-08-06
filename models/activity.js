module.exports = class Activity {
    constructor(id, title, description, category, duration, difficultyLevel, activityContent) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.duration = duration;
        this.difficultyLevel = difficultyLevel;
        this.activityContent = activityContent;
        this.creationTimestamp = new Date();
    }
}