# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "bob@test.com", password: "123456")

Post.create(date: "2018-04-12", body: "This is a test message number 1", public_view: true, user_id: 1)

User.create(email: "randy@test.com", password: "987654")

Post.create(date: "2018-04-12", body: "This is a test message number 2", public_view: false, user_id: 2)

User.create(email: "chris@test.com", password: "123456")

Post.create(date: "2018-04-12", body: "This is a test message number 3", public_view: true, user_id: 3)

Post.create(date: "2018-04-12", body: "This is a test message number 4", public_view: false, user_id: 3)

User.create(email: "jason@test.com", password: "123456")
