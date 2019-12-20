class User < ApplicationRecord
    has_many :games
    has_secure_password
    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
