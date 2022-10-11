class Propogation < ApplicationRecord
    belongs_to :plant
    
    validates :name, :method, :pdate, :results, presence: true
end
