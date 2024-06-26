package controllers

import (
	"github.com/HMouaziz/GoDoIt/Server/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetTasks(c *gin.Context) {
	// Placeholder for getting tasks
	tasks := []models.Task{}
	c.JSON(http.StatusOK, tasks)
}

func CreateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Placeholder for creating a task
	c.JSON(http.StatusCreated, task)
}

func UpdateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Placeholder for updating a task
	c.JSON(http.StatusOK, task)
}

func DeleteTask(c *gin.Context) {
	// Placeholder for deleting a task
	c.Status(http.StatusNoContent)
}
