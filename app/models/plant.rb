class Plant < ApplicationRecord

has_many :notes, dependent: :destroy
has_many :wishlists, dependent: :destroy
has_many :users, through: :wishlist
has_many :users, through: :notes

validates :name, :desc, presence: true
end
