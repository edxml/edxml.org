$(document).ready(
    function ()
    {
        const termynals = $('.termynal');
        $.appear(termynals);

        termynals.on('appear', function() {
            if (!this.termynal) {
                this.termynal = new Termynal(this, {startDelay: 1000, progressLength: 20});
            }
        });
    }
)
