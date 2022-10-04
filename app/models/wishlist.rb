class Wishlist < ApplicationRecord
  belongs_to :plant
  belongs_to :user

end
