# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "bob@test.com", password: "123456")
Post.create(date: "2018-04-12", body: "This is a test message number 1", public_view: true, address: "704 J St, San Diego, CA 92101", user_id: 1, latitude: "32.7096422", longitude: "-117.1601433")

User.create(email: "randy@test.com", password: "987654")
Post.create(date: "2018-04-12", body: "This is a test message number 2", public_view: true, address: "560 Fourth Ave, San Diego, CA 92101", user_id: 2, latitude: "32.71118", longitude: "-117.1635151")

User.create(email: "chris@test.com", password: "123456")
Post.create(date: "2018-04-12", body: "This is a test message number 3", public_view: true, address: "472 Third Ave, San Diego, CA 92101", user_id: 3, latitude: "32.7102225", longitude: "-117.1643938")
Post.create(date: "2018-04-12", body: "This is a test message number 4", public_view: true, address: "400 J St, San Diego, CA 92101", user_id: 3, latitude: "32.7095029", longitude: "-117.1629924")

User.create(email: "jason@test.com", password: "123456")
Post.create(date: "2018-04-12", body: "This is a test message number 3", public_view: true, address: "485 Tenth Ave, San Diego, CA 92101", user_id: 4, latitude: "32.7101154", longitude: "-117.1575104")
Post.create(date: "2018-04-12", body: "This is a test message number 4", public_view: true, address: "1616 National Ave, San Diego, CA 92113", user_id: 4, latitude: "32.7040706", longitude: "-117.1517201")
Post.create(date: "2018-04-12", body: "This is a test message number 3", public_view: true, address: "1441 L St, San Diego, CA 92101", user_id: 4, latitude: "32.7071477", longitude: "-117.1537803")
Post.create(date: "2018-04-12", body: "This is a test message number 4", public_view: true, address: "627 Eighth Ave, San Diego, CA 92101", user_id: 4, latitude: "32.711992", longitude: "-117.1592917")
