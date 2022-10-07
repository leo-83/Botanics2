class Plant < ApplicationRecord

has_many :notes, dependent: :destroy
has_many :wishlists, dependent: :destroy
has_many :users, through: :wishlist

end
