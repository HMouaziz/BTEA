package config

import (
	"github.com/HMouaziz/GoDoIt/Server/models"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"os"
)

var DB *gorm.DB

func ConnectDatabase() {
	dsn := os.Getenv("DATABASE_URL")
	database, err := gorm.Open("postgres", dsn)
	if err != nil {
		panic("Failed to connect to database!")
	}
	database.AutoMigrate(&models.Task{})
	DB = database
}
