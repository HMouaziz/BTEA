package main

import (
	"github.com/HMouaziz/GoDoIt/Server/config"
	"github.com/HMouaziz/GoDoIt/Server/routers"
	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDatabase()
	router := gin.Default()
	routers.SetupRoutes(router)
	err := router.Run(":8080")
	if err != nil {
		return
	}
}
