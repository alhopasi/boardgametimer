package BoardGameTimer.controller;

import BoardGameTimer.domain.Timer;
import BoardGameTimer.domain.TimerService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BoardGameTimerController {

    @GetMapping("/")
    public String frontPage() {
        return "index";
    }

    @PostMapping("/")
    public String initTimer(@RequestParam String startTime, @RequestParam String players) {
        TimerService.createTimer(Integer.valueOf(startTime), Integer.valueOf(players));
        return "redirect:/timer";
    }

    @GetMapping("/timer")
    public String timer(Model model) {
        model.addAttribute("timer", TimerService.getTimer());
        return "timer";
    }
}
