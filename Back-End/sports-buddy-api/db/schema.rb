# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_20_212358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "location"
    t.datetime "time"
    t.string "result"
    t.string "sport"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_games", force: :cascade do |t|
    t.integer "user_id"
    t.integer "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.integer "location"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "profile_photo"
  end

end


# https://i.ibb.co/Qv3KBnd/Screen-Shot-2019-12-20-at-4-26-03-PM.png - Matt
# https://i.ibb.co/Yy2ZqM5/Screen-Shot-2019-12-20-at-4-26-08-PM.png - Remi
# https://i.ibb.co/ygb3jjt/Screen-Shot-2019-12-20-at-4-26-12-PM.png - Sebastian
# https://i.ibb.co/qCDp5Pm/Screen-Shot-2019-12-20-at-4-26-15-PM.png - Young
# https://i.ibb.co/JKxdb7H/Screen-Shot-2019-12-20-at-4-26-19-PM.png - Trevor
# https://i.ibb.co/ZJvTMdJ/Screen-Shot-2019-12-20-at-4-26-22-PM.png - Jasur
# https://i.ibb.co/zHPnQ4B/Screen-Shot-2019-12-20-at-4-26-27-PM.png - Rob
# https://i.ibb.co/7Grb7Vm/Screen-Shot-2019-12-20-at-4-26-45-PM.png - Ryan
# https://i.ibb.co/sgv27hZ/Screen-Shot-2019-12-20-at-4-26-50-PM.png - Sara
# https://i.ibb.co/db61Xr8/Screen-Shot-2019-12-20-at-4-26-54-PM.png - Jose
# https://i.ibb.co/GQfhJWL/Screen-Shot-2019-12-20-at-4-26-58-PM.png - Chine
# https://i.ibb.co/XJJkgxj/Screen-Shot-2019-12-20-at-4-27-01-PM.png - Will
