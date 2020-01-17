class Api::MylistsController < ApplicationController
     def show
        @mylist = current_user.lists.find_by(video_id: params[:id])
        render :show
    end

    def index
        @mylists = Mylist.all
    end

    def create
        @mylist = Mylist.new(mylist_params)
        @mylist.user_id = current_user.id 
        if @mylist.save
            render json: @mylist
        else
            render json: {message: "Failed to add this to My List"}, status: 422
        end
    end

    def destroy
        @mylist = current_user.lists.find_by(video_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else
            render json: {message: "Not found in my list"}, status: 422
        end
    end

    private
    def mylist_params
        params.require(:mylist).permit(:user_id,:video_id)
    end
end

