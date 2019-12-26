# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
User.destroy_all
UserGame.destroy_all

will = User.create(first_name: "Will", last_name: "Drougas", username: "wdrougas" , email: "wd@gmail.com" ,location: 20009, password_digest: "password", profile_photo: 'https://i.ibb.co/XJJkgxj/Screen-Shot-2019-12-20-at-4-27-01-PM.png')
jose = User.create(first_name: "Jose", last_name: "Romero", username: "jromero" , email: "jr@gmail.com" ,location: 20009, password_digest: "password", profile_photo: 'https://i.ibb.co/db61Xr8/Screen-Shot-2019-12-20-at-4-26-54-PM.png')
trevor = User.create(first_name: "Trevor", last_name: "Jameson", username: "tjameson" , email: "tj@gmail.com" ,location: 32003, password_digest: "password", profile_photo: 'https://i.ibb.co/JKxdb7H/Screen-Shot-2019-12-20-at-4-26-19-PM.png')
chine = User.create(first_name: "Chine", last_name: "Anikwe", username: "canikwe" , email: "ca@gmail.com" ,location: 32003, password_digest: "password", profile_photo: 'https://i.ibb.co/GQfhJWL/Screen-Shot-2019-12-20-at-4-26-58-PM.png')
sara = User.create(first_name: "Sara", last_name: "Tarnvik", username: "ssmith" , email: "sara@gmail.com" ,location: 60062, password_digest: "password", profile_photo: 'https://i.ibb.co/sgv27hZ/Screen-Shot-2019-12-20-at-4-26-50-PM.png')
kyle = User.create(first_name: "Kyle", last_name: "Cole", username: "cakehole" , email: "cakehole@gmail.com" ,location: 60062, password_digest: "password", profile_photo: 'https://i.ibb.co/PGt3SyR/Screen-Shot-2019-12-20-at-4-26-31-PM.png')
jasur = User.create(first_name: "Jasur", last_name: "Abdullin", username: "jabdullin" , email: "ja@gmail.com" ,location: 96815, password_digest: "password", profile_photo: 'https://i.ibb.co/ZJvTMdJ/Screen-Shot-2019-12-20-at-4-26-22-PM.png')
matt = User.create(first_name: "Matt", last_name: "Bechtel", username: "mbechtel" , email: "mb@gmail.com" ,location: 96815, password_digest: "password", profile_photo:'https://i.ibb.co/Qv3KBnd/Screen-Shot-2019-12-20-at-4-26-03-PM.png' )
rob = User.create(first_name: "Rob", last_name: "Heavner", username: "rheavner" , email: "rh@gmail.com" ,location: 27540, password_digest: "password", profile_photo: 'https://i.ibb.co/zHPnQ4B/Screen-Shot-2019-12-20-at-4-26-27-PM.png')
ryan = User.create(first_name: "Ryan", last_name: "Smith", username: "rsmith" , email: "rs@gmail.com" ,location: 27540, password_digest: "password", profile_photo: 'https://i.ibb.co/7Grb7Vm/Screen-Shot-2019-12-20-at-4-26-45-PM.png')
remi = User.create(first_name: "Remi", last_name: "Remi", username: "rremi" , email: "remi@gmail.com" ,location: 60448, password_digest: "password", profile_photo: 'https://i.ibb.co/Yy2ZqM5/Screen-Shot-2019-12-20-at-4-26-08-PM.png')
sebastian = User.create(first_name: "Sebastian", last_name: "Sebastian", username: "ssebastian" , email: "sebastian@gmail.com" ,location: 60448, password_digest: "password", profile_photo: 'https://i.ibb.co/ygb3jjt/Screen-Shot-2019-12-20-at-4-26-12-PM.png' )
young = User.create(first_name: "Young", last_name: "Han", username: "yhan" , email: "yh@gmail.com" ,location: 10956, password_digest: "password", profile_photo: 'https://i.ibb.co/qCDp5Pm/Screen-Shot-2019-12-20-at-4-26-15-PM.png')
emily = User.create(first_name: "Emily", last_name: "Glan", username: "eglan" , email: "eg@gmail.com" ,location: 10956, password_digest: "password", profile_photo: 'https://i.ibb.co/PGt3SyR/Screen-Shot-2019-12-20-at-4-26-31-PM.png')

game1 = Game.create(location: 20009, time: Time.now.to_s, result: "6-3, 6-4", sport: 'tennis')
game2 = Game.create(location: 32003, time: Time.now.to_s, result: "21-9, 21-15", sport: 'table tennis')
game3 = Game.create(location: 60062, time: Time.now.to_s, result: "21-17", sport: 'basketball')
game4 = Game.create(location: 96815, time: Time.now.to_s, result: "7-5, 6-4", sport: 'tennis')
game5 = Game.create(location: 27540, time: Time.now.to_s, result: "-3, +1", sport: 'golf')
game6 = Game.create(location: 60048, time: Time.now.to_s, result: "21-11, 21-16", sport: 'table tennis')
game7 = Game.create(location: 10956, time: Time.now.to_s, result: "3-2", sport: 'soccer')


user_game1 = UserGame.create(user_id: will.id, game_id: game1.id)
user_game2 = UserGame.create(user_id: jose.id, game_id: game1.id)
user_game3 = UserGame.create(user_id: trevor.id, game_id: game2.id)
user_game4 = UserGame.create(user_id: chine.id, game_id: game2.id)
user_game5 = UserGame.create(user_id: sara.id, game_id: game3.id)
user_game6 = UserGame.create(user_id: kyle.id, game_id: game3.id)
user_game7 = UserGame.create(user_id: jasur.id, game_id: game4.id)
user_game8 = UserGame.create(user_id: matt.id, game_id: game4.id)
user_game9 = UserGame.create(user_id: rob.id, game_id: game5.id)
user_game10 = UserGame.create(user_id: ryan.id, game_id: game5.id)
user_game11 = UserGame.create(user_id: remi.id, game_id: game6.id)
user_game12 = UserGame.create(user_id: sebastian.id, game_id: game6.id)
user_game13 = UserGame.create(user_id: young.id, game_id: game7.id)
user_game14 = UserGame.create(user_id: emily.id, game_id: game7.id)


