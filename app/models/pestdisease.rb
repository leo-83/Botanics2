class Pestdisease < ApplicationRecord
  belongs_to :plant

  validates :name, :pdate, :problem, :treatment, presence: true
end
