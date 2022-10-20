class Note < ApplicationRecord
  belongs_to :plant

  validates :body, presence: true
end
