class Api::NotesController < ApplicationController

def index
  render jsonL Notes.all
end

def show
  @notes = Notes.find(params[:id])
  render json: @notes
end

def create
  @notes = Notes.new(notes_params)
  if @notes.save
    render json: @notes
  else
    render json: { errors: @notes.errors }, 
    status: :unprocessable_entity
  end
end

def update
  @notes = Notes.find(params[:id])
  if @notes.update(notes_params)
    render json: @notes
  else
    render json: { errors: @notes.errors }, 
    status: :unprocessable_entity
  end
end

def destroy
  @notes = Notes.find(params[:id])
  @notes.destroy
  render json: { message: 'notes deleted' }
  or
  Notes.find(params[:id]).destroy
  render json: { message: 'notes deleted' }
end

private
  def notes_params
    params.require(:notes).permit(:body, :plant_id, :everything the table has)
  end
end
