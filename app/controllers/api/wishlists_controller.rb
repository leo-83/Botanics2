class Api::WishlistsController < ApplicationController
  before_action :set_plant
  before_action :set_wishlist, except: [ :create]

  def index
    render json: @plant.wishlists
  end

  def show
    render json: @wishlist
  end

  def create
    @wishlist = @plant.wishlists.new(wishlist_params)
    if @wishlist.save
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @wishlist.update(wishlist_params)
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @wishlist.destroy
    render json: { message: 'Wishlist Removed' }
  end

  private 
    def wishlist_params
      params.require(:wishlist).permit(:found)
    end

    def set_plant
      @plant = Plant.find(params[:plant_id])
    end

    def set_wishlist
      @wishlist = @plant.wishlists.find(params[:id])
    end
end
