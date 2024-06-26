FROM golang:1.22.3 AS build

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY .. .

RUN CGO_ENABLED=0 go build -o /server .

FROM golang:1.22.3

WORKDIR /app

COPY --from=build /server /server

EXPOSE 8080

CMD ["/server"]