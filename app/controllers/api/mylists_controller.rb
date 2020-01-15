class Api::MylistsController < ApplicationController
     def show
        render :show
    end

    def index
        @mylists = Mylist.all
    end

    def create
        @mylist = Mylist.new(mylist_params)
        if @mylist.save
            render json: {video_id: @mylist[:video_id]}
        else
            render json: {message: "Failed to add this to My List"}, status: 422
        end
    end

    def delete
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
        params.require(:mylist).permit(:user_id, :video_id)
    end
end
