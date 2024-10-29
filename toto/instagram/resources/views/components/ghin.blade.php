<div>
    @auth
        <a href="{{ url('/dashboard') }}">Dashboard</a>
    @else


 
    <div class="container">
        <div class="header">
        <div class="header1"></div>
        <div class="header2"></div>
        <div class="header3">
            <a href="{{ route('login') }}">Log in</a>

            @if (Route::has('register'))
                <a href="{{ route('register') }}">Sign up</a>
            @endif


        </div>
        </div>
    
        <div class="middle">
            <div class="middle1"></div>
            <div class="middle2"></div>
            </div>
    
            <div class="tit">
                <div></div>
                <div></div>
            </div>
    
    <div class="photos"></div>
    
    </div>

        
    @endauth
</div>